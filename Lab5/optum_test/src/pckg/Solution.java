package pckg;
import java.util.*;
public class Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(solution("????????"));
	}
	 public static String solution(String riddle) {
	     // write your code in Java SE 8
	     String str = "";
	     if(riddle.charAt(0)=='?'){
	         if(riddle.length() > 1){
	             str += randomLetter('a',riddle.charAt(1));
	         }else{
	             str += 'a';
	         }
	     }else{
	         str += riddle.charAt(0);
	     }
	     for(int i = 1; i < riddle.length()-1;i++){
	         if(riddle.charAt(i)=='?'){
	             str += randomLetter(riddle.charAt(i-1),riddle.charAt(i+1));
	         }else{
	             str += riddle.charAt(i);
	         }
	     }
	     if(riddle.charAt(riddle.length()-1)=='?' && riddle.length() > 1){
	             str += randomLetter(riddle.charAt(riddle.length()-2),'a');
	     }else{
	         str+= riddle.charAt(riddle.length()-1);
	     }
	     
	     return str;
	 }
	private static char randomLetter(char letterBefore, char letterAfter){
	     Random r = new Random();
	     if(letterAfter != letterBefore + 1 && letterBefore != '?'){
	         return (char) (letterBefore + 1);
	     }else if(letterBefore != letterAfter + 1 && letterAfter != '?'){
	         return (char) (letterAfter + 1);
	     }
	     return randomChar();
	}
	private static char randomChar(){
        Random r = new Random();
        int x = r.nextInt()%26;
        if(x < 0) {
        	x = x * -1;
        }
        return (char)((int)'a'+ x);
    }
}
//you can also use imports, for example:
