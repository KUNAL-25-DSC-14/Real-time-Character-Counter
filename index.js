const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingE1 = document.getElementById("remaining");

const maxLength = textareaE1.getAttribute("maxlength");

textareaE1.addEventListener("keyup", () => {
    updateCounter();
});
    updateCounter();
function updateCounter() {
    const typedLength = textareaE1.value.length;

    totalCounterE1.innerText = typedLength;
    remainingE1.innerText = maxLength - typedLength;
}
