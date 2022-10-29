import { clients } from "../constants"

export default function Clients() {
  return (
    <section className="flex justify-center items-center my-4">
      <div 
       className="flex justify-center items-center flex-wrap w-full ">
        {clients.map((clients) => (
          <div key={clients.id} className="flex-1 flex justify-center items-center 
          sm:min-w-[1 92px] min-w-[120px] ">
            <img src="{clients.logo}" alt="" 
            className="sm:w-[192px] w-[100px] object-contain "/>
          </div>
        ))}
      </div>
    </section>
  )
}
