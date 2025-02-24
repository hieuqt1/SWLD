import { useState } from "react";
import { Box, Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function ContactForm() {
  const [formResponse, setFormResponse] = useState({
    name: "",
    email: "",
    contactReason: "",
    message: "",
  });

  const contactReasons = [
    "Booking",
    "Join the Team",
    "General Inquiry",
    "Other",
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormResponse({ ...formResponse, [name]: value });
    console.log("formResponse", formResponse);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <InputLabel>Name:</InputLabel>
        <TextField
          variant="outlined"
          name="name"
          value={formResponse.name}
          onChange={handleFormChange}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <InputLabel>Email:</InputLabel>
        <TextField
          variant="outlined"
          name="email"
          value={formResponse.email}
          onChange={handleFormChange}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputLabel>Reason for Contact:</InputLabel>
        <Select
          variant="outlined"
          name="contactReason"
          value={formResponse.contactReason}
          onChange={handleFormChange}
        >
          {contactReasons.map((reason) => (
            <MenuItem value={reason}>{reason}</MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <InputLabel>Message:</InputLabel>
        <TextField
          variant="outlined"
          name="message"
          value={formResponse.message}
          onChange={handleFormChange}
        />
      </Box>

      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: "100%",
          "&:hover": {
            backgroundColor: "#B20000",
          },
          transition: "ease-in-out 0.2s",
        }}
        type="submit"
        disableRipple
        disableElevation
      >
        Submit
      </Button>
    </div>
  );
}
