import React from 'react'

class Footer extends React.Component {

    render () {
        return (
            <div className="footer-outer-container">
                <hr/>
                <div className="footer-inner-container">
                    <div className="footer-links">
                        <h3>Links to Betting Odds</h3>
                        <h2><a href="https://sportsbook.fanduel.com/sports/navigation/11070.3/"> Fanduel</a> - odds for NFL, MLB, NCAA FB, etc.</h2>

                        <h2><a href="http://www.vegasinsider.com/odds/"> Vegas Insider</a> - odds for NFL, MLB, NCAA FB, etc.  </h2>

                        <h2><a href="https://www.oddsshark.com/"> Odds Shark</a> - odds for NFL, MLB, NCAA FB, etc.  </h2>

                    </div>

                    <div className="footer-warning">
                        <h3>Do You Have a Gambling Problem?</h3>
                        <h2>Please call the National Council on Problem Gambling's  Helpline at 1-800-522-4700, or visist their website at:&nbsp;
                        <a href="https://www.ncpgambling.org/help-treatment/national-helpline-1-800-522-4700/">NCPG</a>. </h2>
                    </div>

                </div>
                <hr/>
            </div>
        )
    }
}



export default Footer
