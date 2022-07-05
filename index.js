const data = [
  {
    id: 0,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, github],
    img: person1,
  },
  {
    id: 1,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, instagram, github, planet],
    img: person2,
  },
  {
    id: 2,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, planet],
    img: person3,
  },
  {
    id: 3,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, instagram, github, planet],
    img: person4,
  },
  {
    id: 4,
    name: "James Chimdindu",
    job_title: "Product Designer",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, planet],
    img: person5,
  },
  {
    id: 5,
    name: "Trust Onyekwere",
    job_title: "Developer Advocate",
    specialities: ["Java,", "XML,", "Technical Writing"],
    handles: [twitter, facebook, instagram, github],
    img: person6,
  },
];
document.getElementById("table").innerHTML = Index;
const Index = () => {
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div className="height: 200px;background: gold;width:100%">
            <p>{data.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
