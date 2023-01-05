import linkedInImage from '../assets/linkedin.svg'

function Contact() {
  return (
    <>
      <div>
        Message me on{' '}
        <span>
          Linked <img src={linkedInImage} alt="in" />
        </span>
      </div>
      <p>Or</p>
      <form>
        <input name="Name" type="string" />
        <input name="Email" type="email" />
        <input name="Subject" type="text" />
        <textarea name="Message"></textarea>
        <input type="button" value="Send email" />
      </form>
    </>
  )
}

export default Contact
