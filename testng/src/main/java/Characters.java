public class Characters {

    public int characters_phrase(String phrase) {
        int characters = phrase.replace(" ", "").length();
        return characters;
    }
}
