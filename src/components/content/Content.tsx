import { useQuery } from "@tanstack/react-query";
import "./Content.css";
import Card from "../card/Card";

export default function Content() {

  const {data: countries, isLoading} = useQuery({
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      return response.json();
    },
    queryKey: ["countries"],

  })

if (isLoading) {
  return <div>Loading...</div>
}


  return <div className="content">
    {countries.map((country: any) => <Card key={country.cca2} country={country} />)}
  </div>

};
