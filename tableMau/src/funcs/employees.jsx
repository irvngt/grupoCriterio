export async function getEmployees(){
  let fetchReponse = await fetch('http://dummy.restapiexample.com/api/v1/employees');
  let json = await fetchReponse.json();
  return json.data || [];
}
