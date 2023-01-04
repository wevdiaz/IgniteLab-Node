import { Content } from "./content";
import { Notification } from "./notification";

describe("Notification", () => {

  it("should be able to create a notification", () => {
    const notification = new Notification({
      category: "social",
      content: new Content("Solicitação de conteúdo extra"),
      recipientId: "xpzpwp000az25",
    })
  
    expect(notification).toBeTruthy();
  });
  
  
});

