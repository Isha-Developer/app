export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-10 m-24">
      <h1 className={"bg-indigo-400 text-4xl font-semibold w-fit p-3 rounded-xl "}>Hey, I'm John</h1>
      <p className={"text-3xl font-semibold" }>a web developer with</p>
      <p className={"text-center px-10"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime
        nam aliquid ipsum architecto veniam inventore odit eius consequuntur
        quos! Officiis reiciendis voluptate iusto tempora qui corrupti amet,
        exercitationem voluptates.
      </p>
      <div className={"rounded-xl flex p-1  bg-indigo-400"}>
        <div className={"text-center py-3 px-10"}>
          <h2 className="font-bold text-1xl">%70</h2>
          <p className="text-sm font-normal">Job achievements</p>
        </div>
        <div className={"text-center py-3 px-10"}>
          <h2 className="font-bold text-1xl">$8.4M</h2>
          <p className="text-sm font-normal">Job achievements</p>
        </div>
        <div className={"text-center py-3 px-10"}>
          <h2 className="font-bold text-1xl">1.6K</h2>
          <p className="text-sm font-normal">Job achievements</p>
        </div>
        <div className={"text-center py-3 px-10"}>
          <h2 className="font-bold text-1xl">+24</h2>
          <p className="text-sm font-normal">Job achievements</p>
        </div>
      </div>
    </main>
  );
}
