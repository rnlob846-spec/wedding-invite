import { useEffect, useState } from "react";
import bg from "./assets/bg.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

function App() {
  const [guestNumber, setGuestNumber] = useState(null);
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
const [attending, setAttending] = useState("");
const handleSubmit = () => {
  if (!name || !attending) {
    alert("Please fill all details");
    return;
  }

  console.log({
    name,
    attending,
    guests
  });
  setGuestNumber(Math.floor(Math.random() * 200) + 50);
setSubmitted(true);

  setSubmitted(true);
};
const sendWhatsApp = () => {
  if (!name || !attending) {
    alert("Please fill all details");
    return;
  }

  const number = Math.floor(Math.random() * 200) + 50;
  setGuestNumber(number);

  const message = `Hello! This is ${name}.
I would like to RSVP for the wedding.

Attending: ${attending}
Guests: ${guests}
Guest No: ${number}

Looking forward to the celebration 💛`;

  const phoneNumber = "917356251790";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
  const [introStage, setIntroStage] = useState("idle"); 
// idle → intro → done
  const venueMapLink = "https://www.google.com/maps?q=10.1234,76.1234";
 
  const [openDoor, setOpenDoor] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  const weddingDate = new Date("july 4, 2026").getTime();
const [selectedImg, setSelectedImg] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const m = Math.floor((distance / (1000 * 60)) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <>
      {selectedImg && (
        <div className="image-popup" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="memory" />
        </div>
      )}`
      {introStage === "intro" && (
  <div className="cinema-intro">
    <h1 className="cinema-text">
      Aleena Asharaf <span>&</span> Muhammed Ashik
    </h1>
  </div>
)}`
      {/* DOOR */}
      
      <div className={`door-container ${openDoor ? "open" : ""}`}>
        <div className="door left"></div>
        <div className="door right"></div>

        {!openDoor && (
          <button
  className="enter-btn"
  onClick={() => {
    setIntroStage("intro");

    setTimeout(() => {
      setOpenDoor(true);
    }, 3500);

    setTimeout(() => {
      setIntroStage("done");
    }, 5500);
  }}
>
  Enter Invitation
</button>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className={`main-content ${openDoor ? "show" : ""}`}>
        

        {/* HERO */}
        
        <section
  className="hero"
  style={{
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${bg}) center/cover no-repeat`
  }}
>   {/* ✨ Sparkles */}
  <div className="sparkles">
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`
        }}
      />
    ))}
  </div>
<div className="dust">
  {[...Array(30)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.6 + 0.2,
        transform: `scale(${Math.random() * 0.8 + 0.4})`
      }}
    />
  ))}
</div>
      <h1 className="title"> "To complete our deen, we begin our journey together in the name of Allah."</h1>


          
  
  

          <button
            className="btn"
            onClick={() =>
              document.getElementById("family").scrollIntoView({ behavior: "smooth" })
            }
          >
            View Invitation
          </button>
        </section>

        {/* FAMILY */}
        <section className="section" id="family">
          <div className="card">
              {/* ✨ Sparkles */}
  <div className="sparkles">
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`
        }}
      />
    ))}
  </div>
  <div className="dust">
  {[...Array(30)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.6 + 0.2,
        transform: `scale(${Math.random() * 0.8 + 0.4})`
      }}
    />
  ))}
</div>
            <h2 className="title">Bride</h2>
             <div className="divider"></div>

            <p className="details elegant">
              D/o<br />
              <b>Asharaf M A</b><br />
              &<br />
              <b>Asma Asharaf</b>
            </p>
            <p3 className="details">
              MUSLIM VEETIL HOUSE ,ELAVALLY POST OFFICE <br />
              </p3>


           
              
            <button
              className="btn"
              onClick={() =>
                document.getElementById("venue").scrollIntoView({ behavior: "smooth" })
              }
            >
            WHERE WE WED
            </button>
          </div>
        </section>

        {/* VENUE */}
        <section className="section" id="venue">
          <div className="card">  {/* ✨ Sparkles */}
  <div className="sparkles">
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`
        }}
      />
    ))}
  </div>
  <div className="dust">
  {[...Array(30)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.6 + 0.2,
        transform: `scale(${Math.random() * 0.8 + 0.4})`
      }}
    />
  ))}
</div>
            <h2 className="title">Venue</h2>

            <p className="details">
              Empees Auditorium<br />
              Venkitangu, Thrissur<br />
              Kerala
            </p>

            <div className="countdown">⏳ {timeLeft} left</div>
                 <div className="venue-actions">
      
      <button
        className="btn map-btn"
        onClick={() =>
          window.open(
            "https://www.google.com/maps/dir/?api=1&destination=Empees+Auditorium+Venkitangu+Thrissur",
            "_blank"
          )
        }
      >
        🚗 Get Directions
      </button>
        <button
        className="btn"
        onClick={() =>
         document.getElementById("moments").scrollIntoView({
  behavior: "smooth"
})
        }
      >
        Our Love Story
      </button>

    </div>
  </div>
</section>

         {/* MOMENTS */}
 <section className="section arabic" id="moments">
  <div className="card">  {/* ✨ Sparkles */}
  <div className="sparkles">
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`
        }}
      />
    ))}
  </div>
  <div className="dust">
  {[...Array(30)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.6 + 0.2,
        transform: `scale(${Math.random() * 0.8 + 0.4})`
      }}
    />
  ))}
</div>
    <h2 className="title">Our Moments</h2>

    <div className="shapes">

      <div className="shape circle"
  style={{ backgroundImage: `url(${img1})` }}
  onClick={() => setSelectedImg(img1)}
></div>

<div className="shape square"
  style={{ backgroundImage: `url(${img2})` }}
  onClick={() => setSelectedImg(img2)}
></div>

<div
  className="shape diamond"
  style={{ backgroundImage: `url(${img3})` }}
  onClick={() => setSelectedImg(img3)}
></div>

    </div>

     <button
      className="btn"
      onClick={() =>
        document.getElementById("wedding").scrollIntoView({
          behavior: "smooth"
        })
      }
    >
    "The Vow"
    </button>
  </div>
</section>
       

        {/* WEDDING */}
        <section className="section arabic" id="wedding">
          <div className="card">  {/* ✨ Sparkles */}
  <div className="sparkles">
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`
        }}
      />
    ))}
  </div>
  <div className="dust">
  {[...Array(30)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.6 + 0.2,
        transform: `scale(${Math.random() * 0.8 + 0.4})`
      }}
    />
  ))}
</div>
            <h2 className="arabic-title">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h2>

            <p className="cursive">
              With hearts full of faith and love,
            </p>

            <h2 className="title">Aleena Asharaf</h2>
            <p className="and">&</p>
            <h2 className="title">Muhammed  Ashik</h2>

            <div className="divider"></div>

            <p className="details elegant">
              joyfully invite you to witness<br />
              the sacred union of their Nikah
            </p>

            <p className="cursive elegant">
              On the blessed day of<br />
              <b>Saturday, the 4th of July</b>
            </p>

            <p className="details">
              EMPEES AUDITORIUM, VENKITANGU, THRISSUR
            </p>

            <div className="divider"></div>

            <p className="quran">
              "And We created you in pairs"<br />
              <span>(Qur’an 78:8)</span>
            </p>
        <button
  className="btn"
  onClick={() =>
    document.getElementById("reception").scrollIntoView({
      behavior: "smooth"
    })
  }
>
  👰 🤵
</button> 
          </div>
        </section> 
        
        {/* RECEPTION */}
         <section className="section arabic" id="reception">
          <div className="card">  {/* ✨ Sparkles */}
  <div className="sparkles">
    {[...Array(12)].map((_, i) => (
      <span
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 3}s`
        }}
      />
    ))}
  </div>
  <div className="dust">
  {[...Array(30)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.6 + 0.2,
        transform: `scale(${Math.random() * 0.8 + 0.4})`
      }}
    />
  ))}
</div>
            <h2 className="title">Reception</h2>

            <div className="divider"></div>

            <p className="cursive">Join us for an evening of celebration</p>

            <p className="details">
              Sunday, July 5th<br />
              With love, laughter & togetherness
            </p>
            <p className="details elegant">Tulasi Auditorium
, Attoor</p>
             
              {/* 👇 ADD THIS */}
    <button
  className="btn"
  onClick={() =>
    document.getElementById("initials").scrollIntoView({
      behavior: "smooth"
    })
  }
>
  A ❤️ A
</button>
          </div>
        </section> 
         <section className="section initials-page" id="initials">
          <div className="initials-container">

 <h1 className="initials-big">
  <span className="float">A</span>

  <span className="heart-wrapper">
    <span className="heart">❤️</span>
  </span>

  <span className="float">A</span>
</h1>
            <p className="initials-tagline">
              A union written in love, sealed forever
            </p>
            <p className="blessings">
  Best Wishes from Friends & Family
</p>
<button
  className="btn"
  onClick={() =>
    document.getElementById("rsvp").scrollIntoView({
      behavior: "smooth"
    })
  }
>
  Confirm Your Presence 💌
</button>
          </div>
        </section>
        <section className="section" id="rsvp">
  <div className="card">
    <h2 className="title">RSVP</h2>

    <p className="details">Kindly let us know if you’ll be joining 💛</p>

    <input
      type="text"
      placeholder="Your Name"
      className="input"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <select
      className="input"
      value={attending}
      onChange={(e) => setAttending(e.target.value)}
    >
      <option value="">Will you attend?</option>
      <option value="Yes">Yes, I’ll be there</option>
      <option value="No">Sorry, can’t make it</option>
    </select>
<div className="guest-selector">
  <p className="guest-label">Number of Guests</p>

 <div className="guest-controls">
  <button onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
  <span>{guests}</span>
  <button onClick={() => setGuests(Math.min(10, guests + 1))}>+</button>
</div>

{/* 👇 SHOW AFTER SUBMIT */}
{guestNumber && (
  <p className="cursive guest-number"> 
    💛 You are guest #{guestNumber}
  </p>
)}
</div>
    <button className="btn" onClick={sendWhatsApp}>
      Send via WhatsApp
    </button>
    
  </div>
</section>
        

      

      </div>
    </>
  );
}


export default App;