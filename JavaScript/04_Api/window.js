const fetch = async () => {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/spells");
  const spells = await res.json();

  return spells;
};

fetch()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
