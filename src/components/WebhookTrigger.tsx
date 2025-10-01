import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const WebhookTrigger = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const webhookUrl = "https://hook.eu2.make.com/b5m3ari0vbgp2livk7u1tgkv2zhuvbrf";

  const handleTrigger = async () => {
    setIsLoading(true);
    console.log("Triggering webhook:", webhookUrl);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      toast({
        title: "Request Sent",
        description: "The webhook was triggered successfully.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the webhook.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 text-center">
      <Button 
        onClick={handleTrigger} 
        disabled={isLoading}
        size="lg"
      >
        {isLoading ? "Sending..." : "Trigger Webhook"}
      </Button>
    </div>
  );
};

export default WebhookTrigger;
