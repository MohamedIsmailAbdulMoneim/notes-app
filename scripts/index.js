import { getNavLinks } from "./constants"
import { linkClickHandler } from "./eventHandlers"
import { getCurrentUrl } from "./constants"
import { getQueryParam } from "./utils";

const currentUrl = getCurrentUrl();
const currentQuery = getQueryParam(currentUrl)


getNavLinks().forEach(link => {
    console.log(link.id)
    if(link.id === currentQuery){
        console.log(link);
        link.classList.add("clickedLink")
    }
    // link.addEventListener("click", (e) => linkClickHandler(e))
})