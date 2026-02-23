import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import FaqItem from "../components/FaqItem";

const Faq = () => {
  return (
    <>
      <NavBar />

      <div className="flex justify-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-center mb-5 font-bold text-6xl">Faq</h1>

          <h2 className="text-center mb-6 font-bold text-4xl">
            After Registration
          </h2>

          <FaqItem
            question="Minsa, when will we get our LoA? Where will it be sent?"
            answer="After we receive your registration, we will send a confirmation email within 1X24 hours, and for LoA we will send
                  it to the team leader's email address within 3X24 hours after
                  registration."
          />

          <FaqItem
            question="Minsa, I registered one week ago, but why haven't I received my LoA and Invoice yet?"
            answer="Try checking the spam folder on your team leader's email,
                  maybe the email from the IYSA team went to the spam folder."
          />

          <FaqItem
            question="Where do you upload the competition file?"
            answer="The drive link for uploading files and the link for uploading
                  proof of payment will be included in the invoice."
          />

          <FaqItem
            question="I want to pay the registration fee but how come I can not find the invoice? and where is the payment transferred?"
            answer="Come on, have you read LoA to the end yet? Because we will
                  send the invoice with your teams LoA, make sure you have read
                  the email from us to the end! For payment, you can transfer to
                  the account listed on the invoice. Make sure you pay according
                  to the nominal stated on the invoice, okay!."
          />

          <FaqItem
            question="Minsa, I have already paid the registration fee. Where can I upload the proof of payment?"
            answer="If you have made a payment, you can upload the proof to the
                  link listed on the invoice, and make sure you fill in and
                  upload the proof of transfer correctly so that the committee
                  can record it correctly too."
          />

          <FaqItem
            question="When will the receipt be sent to us?"
            answer="We will send a receipt for payment in a maximum of 7 working
                  days to the team leaders email, after you have uploaded proof
                  of payment!"
          />

          <h2 className="text-center mt-12 mb-6 font-bold text-4xl">
            During The Event
          </h2>

          <FaqItem
            question="When will the presentation schedule be given by the committee?"
            answer="We will provide a presentation schedule no later than 2 days
                  before the judging takes place or it could be earlier, and we
                  will send it via the WA group and also the team leaders
                  e-mail."
          />

          <FaqItem
            question="What application used for online presentation? Zoom, Google Meet or something else?"
            answer="For online judging, we always use the Zoom application and
                  make sure your Zoom application is up to date."
          />

          <FaqItem
            question="When will the zoom link be given by the committee?"
            answer="We will provide a Zoom link on the judging day, and we will
                  send it periodically to the group according to your teams
                  presentation time"
          />

          <FaqItem
            question="How long will participants present?"
            answer="You will be given 15 minutes for one presentation session which will be divided into two parts, 7 minutes for presentation and 8 minutes for Q&A session with the judges."
          />

          <FaqItem
            question="How many judges will come to the offline participant booth?"
            answer="Same as online judging, there will be 2 judges who evaluate each team. After being evaluated, you will be given a sticker as proof that your booth has been evaluated. Make sure you get 2 stickers."
          />

          <h2 className="text-center mt-12 mb-6 font-bold text-4xl">
            After The Event
          </h2>

          <FaqItem
            question="When will the winners be announced?"
            answer="Winners are announced on the last day of the event according to the official schedule."
          />

          <FaqItem
            question="Where can we see the winner results?"
            answer="You can check the final results on the official event website."
          />

          <FaqItem
            question="When will the certificates be sent?"
            answer="Certificates will be sent within a maximum of 1 month after the winners are announced."
          />

          <FaqItem
            question="Where can we get the supervisor certificate?"
            answer="You can view and download the supervisor certificate on the official event website."
          />

          <FaqItem
            question="How to do medal doubling?"
            answer="For offline participants, you can directly duplicate your medals at the venue after the winners are announced. For online participants, you can duplicate your medals through a link we send in the WhatsApp group. We will send the duplication information in the WhatsApp group no later than 2 days after the winners are announced."
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;