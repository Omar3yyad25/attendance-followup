export async function get({ endpoint = "", id = "" }) {
  console.log("endpoint",endpoint)
  try {
    const response = await fetch(`http://34.29.19.112:8443/${endpoint}/${id}`);
    console.log(response);
    const data = await response.json()
    console.log(`response data: ${data}`)
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function post({ endpoint = "", data = {} }) {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify(data);

    const response = await fetch(`http://34.29.19.112:8443/${endpoint}`, {
      method: "POST",
      headers,
      body,
      mode: "cors",
      credentials: "include"
    });

    const res = await response.text();
    try{
      const jsonres = JSON.parse(res);
      return jsonres
    }catch(e){
      return res
    }

    return res;
  } catch (error) {
    console.error(error);
  }
}
