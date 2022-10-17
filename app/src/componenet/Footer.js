function Footer() {
  return (
    <footer
      className="text-muted py-5"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="container d-flex justify-content-center flex-column">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">E Main St, Lexington, KY 40507</p>
        <p className="mb-1">PHONE: (859)123-12312</p>
        <p className="mb-1">9am - 9pm Daily</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.222607938503!2d-84.4925971!3d38.041899099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e8450f877b%3A0x18daf8ec8d375b08!2sE%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665692737512!5m2!1sen!2sus"
          style={{ width: "400", height: "800", border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="gmap"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
