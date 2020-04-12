package com.edinelezi.onlinestore.model;

import lombok.Data;


import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
public class User /* implements UserDetails */{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long Id;
    private String username;
    private String password;

    public User(String username, String firstName, String lastName) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    private String firstName;

    private String lastName;

    @Column(nullable = false, updatable = false)
    private String email;
    private String phone;
    private boolean enabled=true;


//    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JsonIgnore
//    private Set<UserRole> userRoles = new HashSet<>();

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        Set<GrantedAuthority> authorities = new HashSet<>();
//        userRoles.forEach(ur -> authorities.add(new Authority(ur.getRole().getName())));
//
//        return authorities;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//    @Override
//    public boolean isEnabled(){
//        return enabled;
//    }
}
