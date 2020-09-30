const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    MOVE : Symbol("move"),
    WATCH: Symbol("watch"),
    IGNORE: Symbol("ignore"),
    ALLOW: Symbol("allow"),
    DENY: Symbol("deny"),
    SELL: Symbol("sell"),
    STAY: Symbol("stay"),
    TELL: Symbol("tell"),
    NOT: Symbol("not"),
    ABANDON: Symbol("abandon"),
    END : Symbol("end")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    

    makeAMove(sInput)
    {
        let sReply = ""
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "One morning you are reading a news paper and you find an advertisement on the classifieds news paper selling an apartment building in your preferred neighbourhood,and you decide to purchase it.";
                this.stateCur = GameState.MOVE
                break;
            case GameState.MOVE:
                sReply = " Your family of 13 members including your in-laws decide to move in with you, The first few days seem absolutely fine and things are going really rosy you believe the purchase of the house was the best thing that happened to you,But things take a quick turn and you notice that the lift does not work when you enter it alone.You also notice that any picture that you take of yourself comes out distorted. You brush it off as a mere coincidence and get on with your life.Your family have gotten themselves hooked on to a Television show, What do you do? Do you WATCH or IGNORE?";
                if(sInput.toLowerCase().match("ignore"))
                {
                    this.stateCur = GameState.IGNORE;
                }
                else
                {
                    this.stateCur = GameState.WATCH;
                }
                break;
            case GameState.WATCH:
                sReply = "You find an eerie resemblance to your life which is also portrayed in the show,Initially you brush it off, but the resemblance to your life seems to be too uncanny to ignore it completely.One fine day the serial shows you a disturbing clip of people in the house being murdered and the murderer is not shown on camera,you are spooked completely and you decide to enlist the help of an expert in paranormal activity. The expert wishes to visit your house Do you ALLOW or DENY?";
                if(sInput.toLowerCase().match("deny"))
                {
                    this.stateCur = GameState.DENY;
                }
                else 
                {
                    this.stateCur = GameState.ALLOW;
                }
                break;
            case GameState.IGNORE:
                sReply = "Your wife nags you to watch the show with her and you comply and watch a few episodes with her to give her company.As you watch the show you find an eerie resemblance to your life which is also portrayed in the show,Initially you brush it off, but the resemblance to your life seems to be too uncanny to ignore it completely. One fine day the serial shows you a disturbing clip of people in the house being murdered and the murderer is not shown on camera,you are spooked completely and you decide to enlist the help of an expert in paranormal activity. The expert wishes to visit your house Do you ALLOW or DENY? ";
                if(sInput.toLowerCase().match("deny"))
                {
                    this.stateCur = GameState.DENY;
                }
                else 
                {
                    this.stateCur = GameState.ALLOW;
                }
                break;    
            case GameState.ALLOW:
                sReply = "The expert visits your house and the same day there is an accident in the expert's house and he backs out from helping you. What do you do? SELL the house or STAY there?";
                if(sInput.toLowerCase().match("stay"))
                {
                    this.stateCur = GameState.STAY;
                }
                else 
                {
                    this.stateCur = GameState.SELL;
                }
                break;
            case GameState.DENY:
                sReply = "The expert visits your house irrespective of your reply, you initially are taken aback at his persuasiveness and allow him to enter and the same day there is an accident in the expert's house and he backs out from helping you. What do you do? SELL the house or STAY there?";
                if(sInput.toLowerCase().match("sell"))
                {
                    this.stateCur = GameState.SELL;
                }
                else
                {
                    this.stateCur = GameState.STAY;
                }
                break;  
            case GameState.STAY:
                sReply = "Day and night you are tormented by nightmares and you are the only one who seems to realise the resemblance between your life and the serial,your family seems to be oblivious to this fact.What do you do? Do you TELL them or NOT?";
                if(sInput.toLowerCase().match("not"))
                {
                    this.stateCur = GameState.NOT;
                }
                else
                {
                    this.stateCur = GameState.TELL;
                }
                break;
            case GameState.SELL:
                sReply = "No one wishes to purchase the house since they feel an ominous presence whenever they try to enter the house. You decide to do some research on the house so you visit the library. The Old Librarian is shocked to know that you are the new owner of the house, He tells you a gruesome story of the previous occupants of a house, which stood in the place of the same building that you occupy 50 years ago. The librarian says that all the members in the house were brutally murdered. He asks you to abandon the house immediately Do You ABANDON or Do you STAY?";
                if(sInput.toLowerCase().match("abandon"))
                {
                    this.stateCur = GameState.ABANDON;
                }
                else
                {
                    this.stateCur = GameState.STAY;
                }
                break;  
            case GameState.ABANDON:
                sReply = "You try to leave but you are not able to and you are forced to stay in that haunted house. You think telling your family would serve your best interest.Do you TELL them or NOT?";
                if(sInput.toLowerCase().match("tell"))
                {
                    this.stateCur = GameState.TELL;
                }
                else
                {
                    this.stateCur = GameState.NOT;
                }
                break;
            case GameState.TELL:
                sReply = "They laugh at you and make fun of you, The serial then shows the climax of the plot that is everyone being murdered by a mysterious person.Your family goes on a vacation,but you decide to stay back and watch the serial. The big reveal is made, The person who murders the family is none other than you. You are shocked and jump out. Only to find out that this whole time you were having a nightmare that seemed so realistic.";
                this.stateCur = GameState.END;
                break;
            case GameState.NOT:
                sReply = "The serial then shows the climax of the plot that is everyone being murdered by a mysterious person.Your family goes on a vacation, but you decide to stay back and watch the serial.The big reveal is made, The person who murders the family is none other than you.You are shocked and jump out. Only to find out that this whole time you were having a nightmare that seemed so realistic.";
                this.stateCur = GameState.END;
                break;    
            case GameState.END:
                sReply = "Congratulations you've completed the game";
                break;     
        }

        return([sReply]);
    }
}