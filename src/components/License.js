import React from 'react'

function License() {
  return (
    <div className='container py-5 bg-white rounded my-5'>
        <h1 className="text-center mb-4" style={{fontWeight:'bold'}}>End User License Agreement (EULA)</h1>
        <p style={{fontWeight:'bold'}}>PLEASE READ THIS AGREEMENT CAREFULLY BEFORE USING THIS APP. BY USING THIS APP, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THIS APP.</p>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>1. Acceptance of Terms</h3>
            <p>This End User License Agreement (“Agreement”) is a legal agreement between you (the “User”) and OI Tech Ltd. (“We,” “Us,” or “Our”) governing your use of the OIChat (“App”). By accessing or using the App, you agree to comply with and be bound by the terms outlined in this Agreement.</p>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>2. Prohibited Activities</h3>
            <p>Users of this App must agree that they will not:</p>
            <ul>
                <li>Post, upload, or share objectionable content, including but not limited to:</li>
                <ul>
                    <li>Hate speech, harassment, or abusive content.</li>
                    <li>Pornography or explicit sexual material.</li>
                    <li>Threats, violence, or illegal activities.</li>
                    <li>Child sexual abuse material (CSAM) or any content that exploits or endangers children.</li>
                </ul>
                <li>Engage in abusive behavior, including spamming, phishing, or fraudulent activities.</li>
            </ul>
            <p style={{fontWeight:'bold'}}>We have zero tolerance for objectionable content or abusive users. Violations may result in immediate account suspension, termination, or legal action.</p>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>3. User-Generated Content (UGC)</h3>
            <p>Users are solely responsible for any content they create, upload, or share through the App. By submitting content, you grant Us a non-exclusive, worldwide, royalty-free license to use, modify, display, and distribute the content for the purposes of operating the App.</p>
            <p style={{fontWeight:'bold'}}>Precautions for User Safety:</p>
            <ul>
                <li>Users must report any objectionable content using the in-app reporting feature.</li>
                <li>Moderation tools are implemented to monitor and manage user-generated content.</li>
                <li>Any content involving child sexual abuse material (CSAM) or the exploitation of minors will be reported to authorities immediately, and the user will be banned from the platform.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>4. Child Safety Policy</h3>
            <p style={{fontWeight:'bold'}}>We are committed to maintaining a safe environment for all users, especially minors. To ensure child safety:</p>
            <ul>
                <li>Any violation involving child abuse or exploitation will result in the immediate suspension of the user's account and reporting to relevant law enforcement authorities.</li>
                <li>We have implemented systems to detect and prevent the sharing of child sexual abuse material (CSAM) or any content that exploits or endangers children.</li>
                <li>Users must report any suspicious activities or harmful content involving minors via the in-app communication tools or by contacting us directly.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>5. Termination of Use</h3>
            <p>We reserve the right to terminate or suspend access to the App without notice for:</p>
            <ul>
                <li>Violation of these terms.</li>
                <li>Engaging in illegal or abusive activities, including the exploitation or endangerment of minors.</li>
                <li>Submitting objectionable content, including CSAM.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>6. Privacy</h3>
            <p>Our Privacy Policy governs how we collect, use, and protect user data. By using the App, you consent to the data practices described in the Privacy Policy.</p>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>7. Disclaimer</h3>
            <p>We provide the App on an “as-is” basis and do not guarantee uninterrupted service or the accuracy of any user-generated content.</p>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>8. Governing Law</h3>
            <p>This Agreement shall be governed by the laws of Ontario, Canada.</p>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>9. Agreement to Terms</h3>
            <p>By continuing to use the App, you confirm that you have read, understood, and agreed to this EULA.</p>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>Contact Information</h3>
            <p>For any questions or concerns, please contact us at:</p>
            <p><strong>Email:</strong> info@oichat.com</p>
            <p><strong>Address:</strong> +16476165278</p>
        </div>
    </div>
  )
}

export default License