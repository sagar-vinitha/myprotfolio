let about=document.getElementById("aboutsec");
const ondbClick = () => {
  about.scrollIntoView({
    behavior: "smooth"
  });
  about.style.backgroundColor="white";
};
let home=document.getElementById("Home");
const onClick1 = () => {
  home.scrollIntoView({
    behavior: "smooth"
  });
  home.style.backgroundColor="lwhite";
};
let contact=document.getElementById("contactsec");
const onClick2 = ()=>{
  contact.scrollIntoView({
    behavior: "smooth"
  });
  contact.style.backgroundColor="white";

}
let project=document.getElementById("projectsec");
const onClick3 = ()=>{
  project.scrollIntoView({
    behavior: "smooth"
  });
  project.style.backgroundColor="white";
}