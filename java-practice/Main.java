public class Main{
    public static void main(String[] args){
        int n=5;
        for(int i=1;i<=n;i++){
            for (int j=1;j<=n-i;j++){
                if(j==1 || j==n-i){
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
        }
    }
}