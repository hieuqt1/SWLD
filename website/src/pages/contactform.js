export const prerender = false

const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLScPTViarsdrqv1y1mUD-StOy8fbeQML5pe9UY_ux_C7zmtKCA/formResponse'

export async function POST ({request}) {
  try {
    const body = await request.json();
    const formData = new URLSearchParams();
    formData.append("entry.466650575", body.name); // Name
    formData.append("entry.624304103", body.email); // Email
    formData.append("entry.526975083", body.contactReason); // Reason for Contact
    formData.append("entry.1624634667", body.message); // Message
    const response = await fetch(formURL, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      return new Response("Form submitted successfully!", {
        status: 200,
      });
    } else {
      return new Response("Failed to submit the form.", {
        status: response.status,
      });
    }
     
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Fuck me",
      }),
      { status: 500 }
    );
  }
}
