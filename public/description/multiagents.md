A **captivating** multi-agent, **self-driving** car simulation leveraging a real 4-way intersection from Guadalajara, Jalisco. We modeled an environment using **Unity3D** and an **AI-powered** simulation using AgentPy.

We integrated two agent types:

- **Traffic lights (2)**: Each with two different rule sets, a **fixed routine** and a **voting paradigm**.
- **Cars (40)**: Able to **detect** nearby vehicles to **adjust their speed** and fully **react** to traffic lights. They also have the probability to turn or keep going straight.

We accomplished this with a customizable **Python** + **AgentPy** script that outputs a **JSON** with all the simulation data.

This is then taken by **Unity**, which spawns pools of different cars, controls them, and sets the traffic lights.
