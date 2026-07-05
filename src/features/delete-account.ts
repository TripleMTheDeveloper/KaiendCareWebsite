/** Handles deactivation form submission until a backend endpoint is connected. */
export function bindDeleteAccountForm(): void {
    const form = document.querySelector<HTMLFormElement>(".page-form");

    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        form.reset();
        window.alert("Deactivation request received. Our team will contact you shortly.");
    });
}
