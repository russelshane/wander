/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin } from "lucide-react";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "../../components/ui/input";

interface IPlaceResult {
  label: string;
  value: any;
}

function CreateTrip() {
  const [place, setPlace] = useState<IPlaceResult>();

  return (
    <main className="w-full">
      <div className="w-full bg-tripHero bg-cover bg-center">
        <div className="px-8 py-20 w-full bg-black bg-opacity-30">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-5xl md:text-6xl drop-shadow-md text-slate-100">
              Generate your next adventure
            </h1>
            <p className="text-slate-100 text-md drop-shadow-md md:text-xl">
              Our AI trip planner will generate a personalized travel plan for
              you based on your preferences.
            </p>

            <div className="w-full max-w-3xl p-3 bg-slate-100 rounded-xl flex items-center gap-2">
              <MapPin className="text-slate-600" />
              <div className="w-full">
                <GooglePlacesAutocomplete
                  apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  selectProps={
                    {
                      place,
                      onChange: (v: any) => {
                        setPlace(v);
                        console.log(v);
                      },
                    } as any
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 py-20 flex flex-col gap-10 w-full max-w-4xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl md:text-5xl  text-slate-800">
            Travel Preferences
          </h1>
          <p className="text-slate-600 max-w-2xl text-md md:text-xl">
            Please provide some basic information to help us deliver better
            results.
          </p>
        </div>

        <section className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-20">
          <div className="flex flex-col md:flex-row gap-8 items-center w-full">
            <h2 className="w-full max-w-full md:max-w-md text-3xl font-medium leading-tight text-slate-800">
              1. &nbsp;&nbsp;How many days are you planning to spend?
            </h2>
            <Input
              type="number"
              placeholder="Ex. 3"
              className="max-w-lg p-8 text-lg border-2 focus-visible:ring-orange-400"
            />
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h2 className="w-full max-w-full md:max-w-md text-3xl font-medium leading-tight text-slate-800">
              2. &nbsp;&nbsp;Tell us your price point
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CreateTrip;
