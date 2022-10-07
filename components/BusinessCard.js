import React from 'react'

function BusinessCard(){
    return (
        <div>
            <div className="profile">
                <img src="../assests/profile.svg" />
            </div>
                
            <div className="details">
                <h3 className="name">John John</h3>
                <h3 className="job_title">Fullstack Developer</h3>
                <h3 className="website">john2.website</h3>
                <div className="button">
                    <button className="button--email">Email</button>
                    <button className="button--linkedin">LinkedIn</button>
                </div>
                <h3 className = "about">About</h3>
                <div className="about--p">I am a fullstack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
                <h3 className = "interest">Interests</h3>
                <div className="interest--p">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
            </div>
            
            <div className="social">
                <img src="../assests/twitter_icon.svg" />
                <img src="../assests/facebook_icon.svg" />
                <img src="../assests/insta_icon.svg" />
                <img src="../assests/github_icon.svg" />
            </div>
        </div>
    )
}

export default BusinessCard