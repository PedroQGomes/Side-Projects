package exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class UserNotFound extends RuntimeException{


    public UserNotFound(){
        super();
    }

    public UserNotFound(String message){
        super(message);
    }
}
