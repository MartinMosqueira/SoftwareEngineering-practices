import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import static org.testng.Assert.*;

public class CharactersTest {

    Characters characters;

    @BeforeTest
    public void setUp() {
        characters = new Characters();
        System.out.println("Instanciar clase Characters");
    }

    @Test(testName = "Cuenta caracteres de una frase", priority = 0)
    public void testCharacters_phrase() {
        Characters characters = new Characters();
        assertEquals(characters.characters_phrase("Hello"), 5);
    }

    @Test(testName = "Cuenta caracteres de una frase con espacios", priority = 0)
    public void testCharacters_phrase2() {
        Characters characters = new Characters();
        assertEquals(characters.characters_phrase("Hello World"), 10);
    }

    @Test(testName = "Cuenta caracteres de una frase con espacios y signos de puntuación", priority = 0)
    public void testCharacters_phrase3() {
        Characters characters = new Characters();
        assertEquals(characters.characters_phrase("Hello World!"), 11);
    }

    @Test(testName = "Cuenta caracteres de una frase, pero esta es incorrecta", priority = 0)
    public void testCharacters_phrase4() {
        Characters characters = new Characters();
        assertFalse(characters.characters_phrase("Hello World!") == 10);
    }
}