package scheduler.aspects;

import javax.servlet.http.HttpSession;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Component("SessionAspect")
@Aspect
public class SessionAspect {

	@Around("execution(* scheduler.controllers.*.*(..))")
	public Object dummyAllAround(ProceedingJoinPoint pjp) throws Throwable {
		Object output;

		ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpSession session = attr.getRequest().getSession(false);
		
		if (!pjp.getSignature().toString().contains("login") && (session == null || (Integer) session.getAttribute("user_id") == null)) {
			output = null;
			attr.getResponse().sendError(401);
		} else {
			output = pjp.proceed();
		}
		
		return output;
	}
}
