import 'package:flutter/material.dart';
import 'package:placeprep/Authentication/config.dart';
import 'package:placeprep/widgets/customwidget.dart';
import 'package:webview_flutter/webview_flutter.dart';

class SQLBasics extends StatefulWidget {
  const SQLBasics({super.key});

  @override
  State<SQLBasics> createState() => _SQLBasicsState();
}

class _SQLBasicsState extends State<SQLBasics> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "SQLBasics",
        link: 'https://www.geeksforgeeks.org/sql-tutorial/', );
  }
}


class AggregateFunctions extends StatefulWidget {
  const AggregateFunctions({super.key});

  @override
  State<AggregateFunctions> createState() => _AggregateFunctionsState();
}

class _AggregateFunctionsState extends State<AggregateFunctions> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "AggregateFunctions",
      link: 'https://www.geeksforgeeks.org/aggregate-functions-in-sql/',
      topic: "AF1",
    );
  }
}

//Encapsulation
class Clauses extends StatefulWidget {
  const Clauses({super.key});

  @override
  State<Clauses> createState() => _ClausesState();
}

class _ClausesState extends State<Clauses> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Clauses",
        link: 'https://www.geeksforgeeks.org/sql-where-clause/',
        topic: "Clauses1",
    );
  }
}

//Inheritance
class CreateDatabase extends StatefulWidget {
  const CreateDatabase({super.key});

  @override
  State<CreateDatabase> createState() => _CreateDatabaseState();
}

class _CreateDatabaseState extends State<CreateDatabase> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
      text: "CreateDatabase",
      link: 'https://www.geeksforgeeks.org/sql-create-database/?ref=lbp',
      topic: "createdb1",
    );
  }
}

//Compile Polymorphism
class DataConstraints extends StatefulWidget {
  const DataConstraints({super.key});

  @override
  State<DataConstraints> createState() => _DataConstraintsState();
}

class _DataConstraintsState extends State<DataConstraints> {
  @override
  Widget build(BuildContext context) {
    return CustomWidget(
        text: "DataConstraints",
        topic: "dataconstraints1",
        link: 'https://www.geeksforgeeks.org/sql-constraints/', );
  }
}


class Functions extends StatefulWidget {
  const Functions({super.key});

  @override
  State<Functions> createState() => _FunctionsState();
}

class _FunctionsState extends State<Functions> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Functions",
        topic: "functions1",
        link: 'https://www.geeksforgeeks.org/sql-functions-aggregate-scalar-functions/', );
  }
}

class Indexes extends StatefulWidget {
  const Indexes({super.key});

  @override
  State<Indexes> createState() => _IndexesState();
}

class _IndexesState extends State<Indexes> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Indexes",
        topic: "indexes1",
        link: 'https://www.geeksforgeeks.org/sql-indexes', );
  }
}

class JoiningData extends StatefulWidget {
  const JoiningData({super.key});

  @override
  State<JoiningData> createState() => _JoiningDataState();
}

class _JoiningDataState extends State<JoiningData> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "JoiningData",
        topic: "joiningdata1",
        link: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/', );
  }
}

class Operators extends StatefulWidget {
  const Operators({super.key});

  @override
  State<Operators> createState() => _Operators();
}

class _Operators extends State<Operators> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Operators",
        topic: "operators1",
        link: 'https://www.geeksforgeeks.org/sql-operators/', );
  }
}

class Queries extends StatefulWidget {
  const Queries({super.key});

  @override
  State<Queries> createState() => _QueriesState();
}

class _QueriesState extends State<Queries> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Queries",
        topic: "queries1",
        link: 'https://www.geeksforgeeks.org/sql-concepts-and-queries/', );
  }
}

class Tables extends StatefulWidget {
  const Tables({super.key});

  @override
  State<Tables> createState() => _TablesState();
}

class _TablesState extends State<Tables> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Tables",
        topic: "tables1",
        link: 'https://www.geeksforgeeks.org/sql-create-table/', );
  }
}

class Views extends StatefulWidget {
  const Views({super.key});

  @override
  State<Views> createState() => _ViewsState();
}

class _ViewsState extends State<Views> {
  @override
  Widget build(BuildContext context) {
    return const CustomWidget(
        text: "Views",
        topic: "views1",
        link: 'https://www.geeksforgeeks.org/sql-views/', );
  }
}