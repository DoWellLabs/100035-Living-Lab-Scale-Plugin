const getScaleData = async (url) => {
  try {
    const res = await fetch(url, { method: "GET" });
    return res.json();
  } catch (e) {
    console.log("Faild to fetch API");
    throw e;
  }
};

const postResponce = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log(res);
  } catch (e) {
    console.log("Faild to Send response");
    throw e;
  }
};

export { getScaleData, postResponce };
