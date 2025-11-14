const checkboxes = document.querySelectorAll<HTMLElement>(".cb");
const doneBtn = document.getElementById("done");

function toggleCheckbox(cb: HTMLElement, activate: boolean) {
    cb.classList.remove("animate-forward", "animate-backward");

    if (activate) {
        cb.classList.add("animate-forward", "active");
    } else {
        cb.classList.add("animate-backward");
        cb.classList.remove("active");
    }

    cb.addEventListener(
        "animationend",
        () => cb.classList.remove("animate-forward", "animate-backward"),
        { once: true }
    );
}

checkboxes.forEach((cb) => {
    cb.addEventListener("click", () => {
        const isActive = cb.classList.contains("active");
        toggleCheckbox(cb, !isActive);

        if (cb.classList.contains("check-all")) {
            checkboxes.forEach((otherCb) => {
                if (otherCb !== cb) {
                    toggleCheckbox(otherCb, !isActive);
                }
            });
        }
    });
});

doneBtn?.addEventListener("click", () => {
    checkboxes.forEach((cb) => cb.classList.remove("active"));
});
