const getScaleData = async (url) => {
  const res = await fetch(url, { method: "GET" });
  console.log(res);
  return res.json();
};

const postResponce = async (url, body) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log(res)
};

export { getScaleData, postResponce };
