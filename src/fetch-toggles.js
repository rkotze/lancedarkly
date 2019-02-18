exports.fetchToggles = async function fetchToggles({
  baseURI,
  defaultProject,
  accessToken
}) {
  const rawFlags = await fetch(`${baseURI}/api/v2/flags/${defaultProject}`, {
    headers: new Headers({
      Authorization: accessToken
    })
  });
  return await rawFlags.json();
};
