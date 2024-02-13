package amigo.tn.security.user;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")

public class User implements UserDetails {

  @Id
  private String id;
  private String firstname;
  private String lastname;
  private String email;
  private String password;
 
  private Role role;
@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
	return role.getAuthorities();
}

@Override
public String getPassword() {
  return password;
}

@Override
public String getUsername() {
  return email;
}

@Override
public boolean isAccountNonExpired() {
  return true;
}

@Override
public boolean isAccountNonLocked() {
  return true;
}

@Override
public boolean isCredentialsNonExpired() {
  return true;
}

@Override
public boolean isEnabled() {
  return true;
}
}