import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import About from "./Components/About/About";

test("renders home component", () => {
    render(<App />);
    const devName = screen.getByText("Conor Higgins");
    expect(devName).toBeInTheDocument();
});

test("finds navigation buttons", () => {
    render(<App />);
    const portfolioButton = screen.getByRole("button", { name: "Portfolio" });
    expect(portfolioButton).toBeInTheDocument();
});

test("updates rendered component", async () => {
    render(<App />);
    const aboutButton = screen.getByRole("button", { name: "About" });
    userEvent.click(aboutButton);
    await waitFor(() =>
        expect(screen.getByText("Peak District")).toBeInTheDocument()
    );
});
