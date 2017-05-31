let React = require('react');
let FontAwesome = require('react-fontawesome');
let Paper = require('../../core/common-ui/paper');

let colors = require('../../../assets/styles/colors');
let shadows = require('../../../assets/styles/shadows.js');

let pageStyle = {
    backgroundColor: colors.grey,
    height: '100%'
};

let headerStyle = {
    padding: 15,
    position: 'absolute',
    textAlign: 'right',
    top: 0,
    width: '100%'
};

let currentActionStyle = {
    backgroundColor: colors.red,
    border: '0 none',
    boxShadow: shadows.boxShadow,
    color: colors.gold,
    fontSize: '25px',
    fontWeight: 'bold',
    height: 50,
    left: -20,
    padding: 10,
    paddingLeft: 35,
    position: 'absolute',
    textAlign: 'left',
    top: 15,
    width: 'calc(100% - 60px)'
};

let closeActionStyle = {
    color: colors.darkRed,
    fontSize: 30,
    position: 'absolute',
    right: 10,
    textShadow: shadows.textShadow,
    top: 10
};

let headerButtonStyle = {
    backgroundColor: colors.red,
    border: `4px solid ${colors.gold}`,
    borderRadius: 10,
    boxShadow: shadows.boxShadow,
    color: colors.gold,
    fontSize: 35,
    height: 50,
    width: 50
};

let contentStyle = {
    height: 'calc(100% - 60px)',
    overflowY: 'auto',
    padding: '80px 10px 30px 10px'
};

let footerStyle = {
    backgroundColor: colors.red,
    minWidth: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap'
};

let footerButtonStyle = {
    backgroundColor: colors.red,
    border: '0 none',
    color: colors.gold,
    display: 'inline-block',
    fontSize: 40,
    height: 60,
    marginRight: 10,
    textShadow: shadows.textShadow,
    width: 60
};

let paperContents = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo perspiciatis optio nihil ex quaerat. Aliquid magnam molestias perferendis assumenda exercitationem ea, repudiandae quisquam nesciunt amet maxime harum voluptatum veniam illo esse ducimus sequi deserunt neque, eveniet! Obcaecati possimus id unde cum rerum dolorem culpa! Illum, laborum facilis doloribus sunt impedit ex molestiae ut eveniet consequuntur iure asperiores labore atque quam rem libero. Pariatur praesentium commodi sed, nostrum perspiciatis voluptatibus consequuntur temporibus fugiat sequi at iusto numquam itaque saepe vitae maiores, obcaecati, eveniet voluptatum aspernatur delectus. Eos et iure molestias, molestiae dolore, aliquam ratione fugit cupiditate possimus doloremque qui accusamus harum maiores laboriosam! In quisquam inventore harum beatae a eveniet, ullam ut quod nemo sint cupiditate aut. Natus et soluta explicabo atque delectus enim maiores perferendis dolores neque obcaecati aliquam doloremque optio nam, asperiores autem fuga commodi quo fugit itaque, nesciunt. Et voluptatum sequi vero aut voluptate eos molestiae, at dolorem, molestias amet enim alias aliquid tempore dignissimos minus totam tempora non reiciendis magnam nobis itaque, animi. Aliquam corporis reiciendis itaque ipsum natus consectetur voluptate a facere, reprehenderit cupiditate, quis ea obcaecati sit facilis molestiae dolorum quod. Vel ratione in illum iste libero officiis ad. Est blanditiis beatae non, debitis eligendi, quisquam nesciunt quos dolorum fugiat tenetur ut, consequatur sit delectus odio! Dicta hic iste soluta, neque, explicabo et reprehenderit cum, sequi eveniet nobis earum. Quod deleniti, quam mollitia harum non, adipisci commodi, nam consequatur nostrum veritatis natus qui et, est quis magni. Laboriosam officiis tempora dignissimos. Accusamus illo quibusdam nemo molestias. Nihil ea et vel iusto tempore eaque aliquam maiores, veniam, mollitia distinctio. Veniam nisi numquam atque quos voluptatem facere pariatur doloremque quasi. Voluptate excepturi, aut, ut rerum, ad unde eos ratione reprehenderit quos provident consequuntur temporibus maxime deleniti. Eligendi ipsum, quasi. Modi reiciendis magni voluptatem impedit obcaecati assumenda illo cumque ratione consectetur, natus nobis cum omnis soluta provident, quis non beatae officiis iusto ipsum fugiat ipsa hic earum optio nulla placeat. Magni totam, excepturi aperiam esse laboriosam assumenda cupiditate repellat, delectus reprehenderit quibusdam ipsam minus temporibus iste optio voluptatibus minima accusamus nam veritatis voluptates saepe facilis nesciunt vero cumque. Beatae reprehenderit explicabo, provident ullam voluptas placeat recusandae, corporis molestiae cupiditate, odio porro maiores ipsam. Facilis iste natus quis blanditiis repellat iusto ab totam hic. Quas beatae reprehenderit et illo, error accusamus magni debitis obcaecati blanditiis fuga nulla nesciunt eos, rerum, doloribus modi. Assumenda neque iure, maiores a pariatur aperiam sunt reprehenderit similique! Eligendi culpa perspiciatis tenetur sit laborum dolores accusamus praesentium? Omnis architecto quae eaque amet. Error modi assumenda repellat exercitationem rem sequi, odit dicta, expedita voluptatum eveniet. Tenetur voluptates vel dolores distinctio placeat excepturi, quia vero est consectetur, quo explicabo, rem id. Deserunt libero, rem illo maxime soluta facilis ut perferendis tenetur sint labore a, excepturi sed vel, similique voluptatum optio ad. Obcaecati odio amet adipisci aliquid ut nostrum repellendus. Magni, aut assumenda incidunt repellat doloremque quibusdam rem quo, delectus temporibus omnis animi enim similique expedita culpa tenetur, beatae voluptate totam ex laboriosam libero. Inventore officia eos autem.</p>;
                    
class MainPage extends React.Component{
    render() {
        return (
            <div style={pageStyle}>
                <div style={headerStyle}>
                    <button aria-label="Select to Close" style={currentActionStyle}>
                        Talk To... 
                        <FontAwesome name="times" style={closeActionStyle} />
                    </button>
                    <button aria-label="Go to the Home Menu" style={headerButtonStyle}>
                        <FontAwesome name="home" />
                    </button>
                </div>
                <div style={contentStyle}>
                    <Paper contents={paperContents}></Paper>
                </div>
                <div style={footerStyle}>
                    <button id="look" aria-label="select to view the help screen" style={footerButtonStyle}>
                        <FontAwesome name="question" />
                    </button>
                    <button id="look" aria-label="select to look at something" style={footerButtonStyle}>
                        <FontAwesome name="search" />
                    </button>
                    <button id="look" aria-label="select to talk to someone" style={footerButtonStyle}>
                        <FontAwesome name="comment" />
                    </button>
                    <button id="look" aria-label="select to pick up something" style={footerButtonStyle}>
                        <FontAwesome name="hand-paper-o" />
                    </button>
                    <button id="look" aria-label="select to open your inventory" style={footerButtonStyle}>
                        <FontAwesome name="suitcase" />
                    </button>
                    <button id="look" aria-label="select to go somewhere else" style={footerButtonStyle}>
                        <FontAwesome name="share" />
                    </button>
                    <button id="look" aria-label="select to talk to Watson" style={footerButtonStyle}>
                        <FontAwesome name="user" />
                    </button>
                </div>
            </div>
        );
    };
};

module.exports = MainPage;