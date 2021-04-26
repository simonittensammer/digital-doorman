package at.htl.boundary;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@ApplicationScoped
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/")
public class DoormanEndpoint {

    @GET
    @Path("/openDoor")
    public Response openDoor() {
        try {
            Process process = Runtime.getRuntime().exec("pwd");
            printResults(process);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Response.ok().build();
    }

    @GET
    @Path("/openGarage")
    public Response openGarage() {
        try {
            Process process = Runtime.getRuntime().exec("pwd");
            printResults(process);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Response.ok().build();
    }

    public static void printResults(Process process) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line = "";
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    }
}
