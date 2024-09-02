
export default async function Home() {
  const test = await fetch("https://edu.eclab.me/api/test");
  const {data} = await test.json();

  console.log(data);
  return (
    <div>
      Home
    </div>
  );
}
