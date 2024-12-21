import React from 'react'

function Privacy() {
  return (
    <div className='container py-5 bg-white rounded my-5'>
        <h1 className="text-center mb-4" style={{fontWeight:'bold'}}>Privacy Policy</h1>
        <div class="my-5">
            <h3 style={{fontWeight:'bold'}}>1. Information We Collect</h3>
            <h5 className="mt-3">1.1 Information You Provide</h5>
            <ul>
                <li>Account Information: Your name, phone number, email address, profile picture, and any other information you voluntarily provide.</li>
                <li>Media and Files: Images, videos, voice messages, and documents shared within chats.</li>
            </ul>
            <h5 className="mt-3">1.2 Information We Collect Automatically</h5>
            <ul>
                <li>Device Information: Device model, operating system, app version, device identifiers, and network information for ensuring security and 2 factor authentications.</li><li>Usage Data: Interaction with app features, crash logs, and performance metrics.
                </li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>2. How We Use Your Information</h3>
            <ul>
                <li>Provide, maintain, and improve our services.</li>
                <li>Facilitate communication between users.</li>
                <li>Personalize your experience within the app.</li>
                <li>Enhance security, monitor for suspicious activity, and prevent fraud.</li>
                <li>Comply with legal obligations.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>3. Sharing Your Information</h3>
            <ul>
                <li><strong>With Other Users:</strong> Your profile information, such as name and profile picture, is visible to other users with whom you interact.</li>
                <li><strong>For Legal Reasons:</strong> To comply with laws, regulations, or legal requests.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>4. Data Security</h3>
            <p>We implement advanced security measures to protect your data from unauthorized access, disclosure, or destruction. This includes:</p>
            <ul>
                <li>Regular security audits and updates.</li>
                <li>Access controls to limit unauthorized access.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>5. Your Choices</h3>
            <ul>
                <li>Manage Your Information: Update your profile, delete messages, or delete your account at any time.</li>
                <li>Opt-Out: Disable certain features such as sharing your location or syncing your contacts.</li>
                <li>Request Data: You may request a copy of your data or ask us to delete it by contacting our support team.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>6. Data Retention</h3>
            <ul>
                <li>Account Information: Retained as long as your account is active. Deleted accounts are permanently removed after 90 days. Associated media files and any related information is also removed automatically.</li>
            </ul>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>8. Updates to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Changes will be posted here, and we will notify you if the updates are significant.</p>
        </div>
        <div className="my-5">
            <h3 style={{fontWeight:'bold'}}>9. Contact Us</h3>
            <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
            <p><strong>Email:</strong> info@oichat.com</p>
            <p><strong>Contact Number:</strong> +1 6476165278</p>
        </div>
    </div>
  )
}

export default Privacy