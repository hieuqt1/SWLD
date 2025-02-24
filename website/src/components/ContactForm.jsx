import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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
    <Grid2 container spacing={2} alignItems={"center"}>
      <Grid2 size={4} justifyItems={"end"}>
        <InputLabel>Name:</InputLabel>
      </Grid2>
      <Grid2 size={8}>
        <TextField
          variant="outlined"
          name="name"
          required
          value={formResponse.name}
          onChange={handleFormChange}
          sx={{ width: "80%" }}
        />
      </Grid2>

      <Grid2 size={4} justifyItems={"end"}>
        <InputLabel>Email:</InputLabel>
      </Grid2>
      <Grid2 size={8}>
        <TextField
          variant="outlined"
          name="email"
          required
          value={formResponse.email}
          onChange={handleFormChange}
          sx={{ width: "80%" }}
        />
      </Grid2>
      <Grid2 size={4} justifyItems={"end"}>
        <InputLabel>Reason for Contact:</InputLabel>
      </Grid2>
      <Grid2 size={8}>
        <Select
          variant="outlined"
          name="contactReason"
          required
          value={formResponse.contactReason}
          onChange={handleFormChange}
          sx={{ width: "80%" }}
        >
          {contactReasons.map((reason) => (
            <MenuItem value={reason}>{reason}</MenuItem>
          ))}
        </Select>
      </Grid2>
      <Grid2 size={4} justifyItems={"end"}>
        <InputLabel>Message:</InputLabel>
      </Grid2>
      <Grid2 size={8}>
        <TextField
          variant="outlined"
          name="message"
          required
          multiline
          value={formResponse.message}
          onChange={handleFormChange}
          sx={{
            width: "80%",
            // maxHeight: "8rem",
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          }}
        />
      </Grid2>

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
    </Grid2>
  );
}
