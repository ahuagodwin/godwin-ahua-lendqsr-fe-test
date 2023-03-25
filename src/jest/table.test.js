import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../components/table/Table";


describe("Table component", () => {
  test("renders a table", async () => {
    render(<Table />);

    const orgName = await screen.findByText("Organization Name");
    expect(orgName).toBeInTheDocument();

    const userName = await screen.findByText("User Name");
    expect(userName).toBeInTheDocument();

    const email = await screen.findByText("Email");
    expect(email).toBeInTheDocument();

    const phoneNumber = await screen.findByText("Phone Number");
    expect(phoneNumber).toBeInTheDocument();

    const createdAt = await screen.findByText("Created At");
    expect(createdAt).toBeInTheDocument();

    const status = await screen.findByText("Status");
    expect(status).toBeInTheDocument();
  });
});
