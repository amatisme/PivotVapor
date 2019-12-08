import Vapor
import HTTP

final class HelloController {
    func greet(_ req: Request) throws -> String {
        return "Hello!"
    }

    // func sayHello(_ req: Request) throws -> ResponseRepresentable {
    //     guard let name = req.data["name"]?.string else { 
    //         throw Abort(.badRequest)
    //     }

    //     return "Hello, \(name)"
    // }
}