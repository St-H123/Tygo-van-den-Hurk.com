document.write( // Copy froom contents.html until we find a way to fetch this instead.
`
    <section id="contact-me-section" class="follower hidden blackout">
        <style>@import url(/assets/code/css/contact-form/content.css);</style>
        <div class="rounded shadow bordered vertically-centered horisontally-centered box" id="forum-container">
            <button class="rounded shadow bordered" id="contact-me-close-button">
                <div>x</div>
            </button>
            <form id="contact-me-forum" action="">
                <div id="contact-me-forum-email">
                    <label 
                        for="email"
                        class="horisontally-centered"
                        id="contact-me-forum-email-label"
                    >Email adress:</label>
                    <input 
                        name="email" 
                        class="horisontally-centered"
                        id="contact-me-forum-email-input" 
                        type="email" 
                        placeholder="example@domain.com">
                </div>
                <div id="contact-me-forum-message">
                    <label 
                        for="message" 
                        class="horisontally-centered"
                        id="contact-me-forum-message-label"
                    >Message:</label>
                    <textarea 
                        name="message" 
                        class="not-resizable horisontally-centered"
                        id="contact-me-forum-message-input" 
                        placeholder="this is still a work in progress and it does not work yet."
                    ></textarea>
                </div>
                <input 
                    type="submit" 
                    value="Sent" 
                    id="contact-me-forum-submit-button"
                    class="rounded shadow bordered horisontally-centered">
            </form>
        </div>
        <script src="/assets/code/java-script/contact-form.js"></script>
    </section>
`);