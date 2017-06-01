let React = require('react');

let Paper = require('../../../core/common-ui/paper');

let contentStyle = {
    height: 'calc(100% - 60px)',
    overflowY: 'auto',
    padding: '80px 10px 30px 10px'
};

let paperContents = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo perspiciatis optio nihil ex quaerat. Aliquid magnam molestias perferendis assumenda exercitationem ea, repudiandae quisquam nesciunt amet maxime harum voluptatum veniam illo esse ducimus sequi deserunt neque, eveniet! Obcaecati possimus id unde cum rerum dolorem culpa! Illum, laborum facilis doloribus sunt impedit ex molestiae ut eveniet consequuntur iure asperiores labore atque quam rem libero. Pariatur praesentium commodi sed, nostrum perspiciatis voluptatibus consequuntur temporibus fugiat sequi at iusto numquam itaque saepe vitae maiores, obcaecati, eveniet voluptatum aspernatur delectus. Eos et iure molestias, molestiae dolore, aliquam ratione fugit cupiditate possimus doloremque qui accusamus harum maiores laboriosam! In quisquam inventore harum beatae a eveniet, ullam ut quod nemo sint cupiditate aut. Natus et soluta explicabo atque delectus enim maiores perferendis dolores neque obcaecati aliquam doloremque optio nam, asperiores autem fuga commodi quo fugit itaque, nesciunt. Et voluptatum sequi vero aut voluptate eos molestiae, at dolorem, molestias amet enim alias aliquid tempore dignissimos minus totam tempora non reiciendis magnam nobis itaque, animi. Aliquam corporis reiciendis itaque ipsum natus consectetur voluptate a facere, reprehenderit cupiditate, quis ea obcaecati sit facilis molestiae dolorum quod. Vel ratione in illum iste libero officiis ad. Est blanditiis beatae non, debitis eligendi, quisquam nesciunt quos dolorum fugiat tenetur ut, consequatur sit delectus odio! Dicta hic iste soluta, neque, explicabo et reprehenderit cum, sequi eveniet nobis earum. Quod deleniti, quam mollitia harum non, adipisci commodi, nam consequatur nostrum veritatis natus qui et, est quis magni. Laboriosam officiis tempora dignissimos. Accusamus illo quibusdam nemo molestias. Nihil ea et vel iusto tempore eaque aliquam maiores, veniam, mollitia distinctio. Veniam nisi numquam atque quos voluptatem facere pariatur doloremque quasi. Voluptate excepturi, aut, ut rerum, ad unde eos ratione reprehenderit quos provident consequuntur temporibus maxime deleniti. Eligendi ipsum, quasi. Modi reiciendis magni voluptatem impedit obcaecati assumenda illo cumque ratione consectetur, natus nobis cum omnis soluta provident, quis non beatae officiis iusto ipsum fugiat ipsa hic earum optio nulla placeat. Magni totam, excepturi aperiam esse laboriosam assumenda cupiditate repellat, delectus reprehenderit quibusdam ipsam minus temporibus iste optio voluptatibus minima accusamus nam veritatis voluptates saepe facilis nesciunt vero cumque. Beatae reprehenderit explicabo, provident ullam voluptas placeat recusandae, corporis molestiae cupiditate, odio porro maiores ipsam. Facilis iste natus quis blanditiis repellat iusto ab totam hic. Quas beatae reprehenderit et illo, error accusamus magni debitis obcaecati blanditiis fuga nulla nesciunt eos, rerum, doloribus modi. Assumenda neque iure, maiores a pariatur aperiam sunt reprehenderit similique! Eligendi culpa perspiciatis tenetur sit laborum dolores accusamus praesentium? Omnis architecto quae eaque amet. Error modi assumenda repellat exercitationem rem sequi, odit dicta, expedita voluptatum eveniet. Tenetur voluptates vel dolores distinctio placeat excepturi, quia vero est consectetur, quo explicabo, rem id. Deserunt libero, rem illo maxime soluta facilis ut perferendis tenetur sint labore a, excepturi sed vel, similique voluptatum optio ad. Obcaecati odio amet adipisci aliquid ut nostrum repellendus. Magni, aut assumenda incidunt repellat doloremque quibusdam rem quo, delectus temporibus omnis animi enim similique expedita culpa tenetur, beatae voluptate totam ex laboriosam libero. Inventore officia eos autem.</p>;

class Content extends React.Component{
    render () {
        return (
            <div style={contentStyle}>
                <Paper contents={paperContents}></Paper>
            </div>
        );
    };
};

module.exports = Content;