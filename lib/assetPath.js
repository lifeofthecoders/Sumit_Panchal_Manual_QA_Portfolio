const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/Sumit_Panchal_Manual_QA_Portfolio"
    : "";

export function assetPath(path) {
  if (!path || typeof path !== "string") return "";

  if (
    /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  const finalPath =
    BASE_PATH &&
    (normalizedPath === BASE_PATH ||
      normalizedPath.startsWith(`${BASE_PATH}/`))
      ? normalizedPath
      : `${BASE_PATH}${normalizedPath}`;

  return encodeURI(finalPath);
}