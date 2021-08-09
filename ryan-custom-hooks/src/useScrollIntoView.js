function useScrollIntoView(scrollDelay = 0) {

  const scrollYIntoView = (
      refOrId
  ) => {
    let target;
    if (typeof refOrId === "string"){
      target = document.getElementById(refOrId)
    }else if(refOrId.hasOwnProperty('current')){
      target = refOrId.current
    }else{
      throw new Error("NotFoundReference: Invalid target DOM ID or React Reference.")
    }
    if (target){
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
        }, scrollDelay);
    }
  };

  const scrollXIntoView = (
      refOrId
  ) => {
    let target;
    if (typeof refOrId === "string"){
      target = document.getElementById(refOrId)
    }else if(refOrId.hasOwnProperty('current')){
      target = refOrId.current
    }else{
      throw new Error("NotFoundReference: Invalid target DOM ID or React Reference.")
    }
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }, scrollDelay);
    }
  };

  return { scrollYIntoView, scrollXIntoView }
}

export default useScrollIntoView;
