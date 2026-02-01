import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  email: string;
  firstName: string;
  labels: {
    email: string;
    message: string;
    name: string;
    reason: string;
    title: string;
    who: string;
  };
  lastName: string;
  message: string;
  reason: string;
  who: string;
}

function ContactEmailTemplate({
  email,
  firstName,
  labels,
  lastName,
  message,
  reason,
  who,
}: ContactEmailTemplateProps) {
  const previewText = `New contact from ${firstName} ${lastName} - ${reason}`;

  return (
    <Html dir="ltr" lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading as="h1" style={h1}>
            {labels.title}
          </Heading>

          <Hr style={hr} />

          <Section style={infoCard}>
            <Text style={infoRow}>
              <strong style={label}>{labels.name}:</strong>{" "}
              <span style={value}>
                {firstName} {lastName}
              </span>
            </Text>
            <Text style={infoRow}>
              <strong style={label}>{labels.email}:</strong>{" "}
              <span style={value}>{email}</span>
            </Text>
            <Text style={infoRow}>
              <strong style={label}>{labels.who}:</strong>{" "}
              <span style={value}>{who}</span>
            </Text>
            <Text style={infoRow}>
              <strong style={label}>{labels.reason}:</strong>{" "}
              <span style={value}>{reason}</span>
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={messageSection}>
            <Text style={messageLabel}>
              <strong>{labels.message}:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  marginBottom: "64px",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "16px 0",
  padding: "0",
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "26px 0",
};

const infoCard = {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  padding: "24px",
};

const infoRow = {
  color: "#333333",
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "12px 0",
};

const label = {
  color: "#666666",
  fontSize: "15px",
  fontWeight: "600",
};

const value = {
  color: "#1a1a1a",
  fontSize: "15px",
};

const messageSection = {
  marginBottom: "24px",
  marginTop: "24px",
};

const messageLabel = {
  color: "#333333",
  fontSize: "15px",
  fontWeight: "600",
  marginBottom: "12px",
};

const messageText = {
  color: "#333333",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "8px 0",
  whiteSpace: "pre-wrap",
};

export { ContactEmailTemplate };
