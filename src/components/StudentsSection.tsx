import { GraduationCap } from "lucide-react";

const phdStudents = [
  "Amir Egozi (2012)", "Ayelet Heimowitz (2016)", "Shai Gepstien (2018)",
  "Shachar Mahpud (2019)", "Yuval Nirkin (2022, joint with Tal Hassner)",
  "Eran Dahan (2024)", "Ron Ferens (2026)", "Shay Dekel (2026)", "Gil Shapira",
  "Ofer Idan (joint with Yoli Shavit)", "Eli Passov (joint with Nathan Netanyahu)",
];

const mscStudents = [
  "Michael Chertok (2011)", "Ayelet Heimowitz (2011)", "Yochai Yemini (2011)",
  "Avi Septimus (2012)", "Shimrit Haber (2012)", "Chen Hajaj (2012)",
  "Sara Nagelberg (2013)", "Yaron Hakuk (2013)", "Sagi Mor (2014)",
  "Udi Shusterman (2014)", "Uri Okun (2014)", "Victor May (2015)",
  "Liad Shmargard (2016)", "Shay Zadik (2016)", "Yoni Klien (2016)",
  "Ariel Navot (2017)", "Elad Ben Baruch (2018)", "Avi Ganzeli (2019)",
  "Noam Malali (2020)", "Gabi Azhari (2019)", "Shaked Hiba (2021)",
  "Ofer Idan (2024)", "Ran Sandhus (2025)",
  "Nissim Mahlof",
];

const StudentsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Students</h2>
        <p className="section-subtitle">Mentoring the next generation of researchers</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="font-display text-xl font-semibold">PhD Students</h3>
            </div>
            <ul className="space-y-2">
              {phdStudents.map((s) => (
                <li key={s} className="text-sm text-muted-foreground pl-4 border-l-2 border-accent/20">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="font-display text-xl font-semibold">MSc Students</h3>
            </div>
            <ul className="space-y-2">
              {mscStudents.map((s) => (
                <li key={s} className="text-sm text-muted-foreground pl-4 border-l-2 border-accent/20">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold mb-3">Postdocs</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground pl-4 border-l-2 border-accent/20">
              Dr. Yaniv Gur (2009)
            </li>
            <li className="text-sm text-muted-foreground pl-4 border-l-2 border-accent/20">
              Dr. Yoli Shavit (2020–2023, now Senior Lecturer at Bar-Ilan University)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
